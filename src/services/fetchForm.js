export async function submitFormData(data) {
	const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

	const response = await fetch(FORM_ENDPOINT, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}
