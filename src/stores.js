import { writable } from "svelte/store";

export const weather = writable({})
export const loading = writable(false)
export const alerts = writable([])
export const msg = writable('Obtaining geolocation...')