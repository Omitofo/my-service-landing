import { useState } from "react";

function sanitize(input) {
  return input.replace(/[<>]/g, "").trim();
}

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    servicios: [], // ahora array de strings
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const serviciosDisponibles = [
    "Desarrollo Web",
    "Consultoría",
    "Soporte Técnico",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "servicios") {
      let newServicios = [...form.servicios];
      if (checked) {
        newServicios.push(value);
      } else {
        newServicios = newServicios.filter((s) => s !== value);
      }
      setForm({ ...form, servicios: newServicios });
    } else {
      setForm({ ...form, [name]: value });
    }
    setError("");
    setSuccess(false);
  };

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = sanitize(form.nombre);
    const email = sanitize(form.email);
    const mensaje = sanitize(form.mensaje);
    const servicios = form.servicios.map(sanitize);

    if (!nombre || !email) {
      setError("Por favor, ingresa tu nombre y correo electrónico.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Aquí podrías hacer que seleccionar al menos uno sea obligatorio
    // Si quieres quitar el comentario y hacer obligatorio, descomenta:
    // if (servicios.length === 0) {
    //   setError("Por favor, selecciona al menos un servicio.");
    //   return;
    // }

    // Simulación de envío exitoso
    setSuccess(true);
    setForm({ nombre: "", email: "", servicios: [], mensaje: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-base-200 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-center">Solicita una cotización</h3>

      {error && <p className="mb-4 text-red-600 text-center">{error}</p>}
      {success && <p className="mb-4 text-green-600 text-center">Gracias por contactarnos. Te responderemos pronto.</p>}

      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Tu correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
        required
      />

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Selecciona los servicios que te interesan</label>
        {serviciosDisponibles.map((servicio) => (
          <label key={servicio} className="flex items-center space-x-2 mb-2 cursor-pointer">
            <input
              type="checkbox"
              name="servicios"
              value={servicio}
              checked={form.servicios.includes(servicio)}
              onChange={handleChange}
              className="checkbox checkbox-primary"
            />
            <span>{servicio}</span>
          </label>
        ))}
      </div>

      <textarea
        name="mensaje"
        placeholder="Cuéntanos brevemente lo que necesitas"
        value={form.mensaje}
        onChange={handleChange}
        className="textarea textarea-bordered w-full mb-6"
        rows="4"
      />

      <button type="submit" className="btn btn-primary w-full">
        Enviar
      </button>
    </form>
  );
}
