import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Pay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { planName, amount } = location.state || {};

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!planName || !amount) {
      navigate("/");
    }
  }, [planName, amount, navigate]);

  const sanitize = (value) => value.replace(/[<>]/g, "");

  const isValidEmail = (email) =>
    /^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = sanitize(value);

    if (["cardNumber", "cvc", "expiry"].includes(name)) {
      sanitizedValue = sanitizedValue.replace(/\D/g, ""); // solo dígitos
    }

    if (name === "cardNumber") {
      sanitizedValue = sanitizedValue.slice(0, 16);
    }

    if (name === "cvc") {
      sanitizedValue = sanitizedValue.slice(0, 4);
    }

    if (name === "expiry") {
      sanitizedValue = sanitizedValue.slice(0, 4);
    }

    setForm((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  if (!planName || !amount) return null;

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-base-100 p-6 rounded-xl shadow-xl">
        {/* Stepper */}
        <ul className="steps mb-10 w-full">
          <li className={`step ${step >= 0 ? "step-primary" : ""}`}>Datos</li>
          <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Pago</li>
          <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Confirmación</li>
          <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Éxito</li>
        </ul>

        {/* Paso 1 - Datos del cliente */}
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Tus Datos</h2>
            <div className="form-control mb-4 flex flex-col gap-1">
              <label className="label">Nombre completo</label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control mb-6 flex flex-col gap-1">
              <label className="label">Correo electrónico</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!form.name || !isValidEmail(form.email)}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Paso 2 - Datos de tarjeta */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Información de pago</h2>
            <div className="form-control mb-4 flex flex-col gap-1">
              <label className="label">Número de tarjeta</label>
              <input
                type="text"
                name="cardNumber"
                className="input input-bordered"
                value={form.cardNumber}
                onChange={handleChange}
                placeholder="1234123412341234"
              />
            </div>
            <div className="flex gap-4">
              <div className="form-control w-1/2 mb-4 flex flex-col gap-1">
                <label className="label">Expira (MMYY)</label>
                <input
                  type="text"
                  name="expiry"
                  className="input input-bordered"
                  value={form.expiry}
                  onChange={handleChange}
                  placeholder="0825"
                />
              </div>
              <div className="form-control w-1/2 mb-4 flex flex-col gap-1">
                <label className="label">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  className="input input-bordered"
                  value={form.cvc}
                  onChange={handleChange}
                  placeholder="123"
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button className="btn btn-ghost" onClick={handleBack}>
                Volver
              </button>
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={
                  form.cardNumber.length !== 16 ||
                  form.expiry.length !== 4 ||
                  form.cvc.length < 3
                }
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Paso 3 - Confirmación */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Confirmar pago</h2>
            <div className="overflow-x-auto">
              <table className="table w-full mb-6">
                <tbody>
                  <tr>
                    <td className="font-semibold">Nombre</td>
                    <td>{form.name}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Correo</td>
                    <td>{form.email}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Plan</td>
                    <td>{planName}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Monto</td>
                    <td>${amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between">
              <button className="btn btn-ghost" onClick={handleBack}>
                Volver
              </button>
              <button
                className={`btn btn-success ${loading ? "btn-disabled" : ""}`}
                onClick={handlePay}
              >
                {loading ? "Procesando..." : "Confirmar y pagar"}
              </button>
            </div>
          </div>
        )}

        {/* Paso 4 - Éxito */}
        {step === 3 && (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold text-green-600 mb-6">
                ✅ ¡Pago exitoso!
                </h2>
                <p className="mb-6">
                Gracias por tu compra, <strong>{form.name}</strong>. Te hemos enviado
                un correo de confirmación a <strong>{form.email}</strong>.
                </p>
                <button className="btn btn-primary" onClick={() => navigate("/")}>
                Volver al inicio
                </button>
            </div>
        )}
      </div>
    </div>
  );
}
