"use strict"

// Global Enums

// En JavaScript no hay enums como en TypeScript, pero puedes simularlo usando objetos congelados (frozen objects).
// Esto es útil para evitar "magic strings" y hacer el código más legible y mantenible.

export const Role = Object.freeze({
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest"
})

// importa el "enum" en otro fichero y usalo así:
// import { Role } from "./utils/enums.js"
// if (user.role === Role.ADMIN) {
//   grantAccess()
// }

// ¿Por qué evitarlo los magic strings y usar los enums?
// Difícil de mantener
// Si "admin" se usa en 10 lugares y luego decides cambiarlo por "administrator", tienes que buscar y reemplazar en todos lados... y te puedes equivocar.

// Fácil de cometer errores
// Si alguien escribe "admn" sin darse cuenta, el código sigue funcionando (sin errores de sintaxis), pero no hace lo que esperas. Los bugs por typos son traicioneros.

// No se explica a sí mismo
// No sabes si "admin" viene de una lista fija, de una API, o de la imaginación del programador. ¿Hay más roles? ¿Qué otros valores posibles hay?

// No se puede reutilizar bien
// Si necesitas ese valor en otro lado, terminas copiando y pegando el mismo string en vez de reutilizar algo centralizado.
