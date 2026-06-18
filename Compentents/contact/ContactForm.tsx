// // components/contact/ContactForm.tsx

// "use client";

// import { useForm } from "react-hook-form";

// export default function ContactForm() {
//   const { register, handleSubmit, reset } = useForm();

//   async function onSubmit(data: any) {
//     await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify(data),
//     });

//     reset();
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-4 border"
//     >
//       <h2 className="text-4xl font-bold text-amber-600">
//         Send Us a Message
//       </h2>

//       <input
//         {...register("name")}
//         placeholder="Your Name"
//         className="w-full border-gray-300 rounded-xl p-4 placeholder:text-gray-800"
//       />

//       <input
//         {...register("email")}
//         placeholder="Email Address"
//         className="w-full border rounded-xl p-4"
//       />
      

//       <input
//         {...register("phone")}
//         placeholder="Phone Number"
//         className="w-full border rounded-xl p-4"
//       />

//       <input
//         {...register("subject")}
//         placeholder="Subject"
//         className="w-full border rounded-xl p-4"
//       />

//       <textarea
//         {...register("message")}
//         rows={6}
//         placeholder="Message"
//         className="w-full border rounded-xl p-4"
//       />

//       <button
//         className="bg-amber-500 text-white px-8 py-4 rounded-xl"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }