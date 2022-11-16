import * as thisModule from './newsletter'

export const initNewsletter = () => {
	// Bind form submit handler
	$('.newsletter-signup').on('submit', function (e) {
		e.preventDefault()
		submitNewsletter(e.currentTarget)
	});
}

export const submitNewsletter = (formElement) => {
	// Get data from the form elements, and get UTM params from the current URL
	const formData = getFormDataWithUtmParams(formElement)
	
	// Transform from FormData instance to a regular object
	const formDataObject = formDataToObject(formData)
	
	// Submit the form
	submitViaAjax(formDataObject)

	// Return form data for testing purposes
	return formDataObject
}

export const getFormDataWithUtmParams = (formElement) => {
	// Get data from the form elements	
	// We're calling this function through an imported module so that it can be mocked in Jest.
	// https://stackoverflow.com/a/47976589/3739549
	let formData = thisModule.getFormData(formElement)
	
	// Get search params from the current URL
	// We're calling this function through an imported module so that it can be mocked in Jest.
	// https://stackoverflow.com/a/47976589/3739549
	const searchParams = new URLSearchParams(thisModule.getWindowLocation().search)
	
	// If any UTM params exist in the search params, add them to the form data.
	const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
	utmKeys.forEach((key) => {
		let val = searchParams.get(key)
		if (!val) { return }
		formData.append(key, val)
	})
	
	return formData
}

export const getFormData = (formElement) => {
	return new FormData(formElement)
}

export const getWindowLocation = () => {
	return window.location
}

const formDataToObject = (formData) => {
	const object = {}
	formData.forEach(function (value, key) {
		object[key] = value
	})
	return object
}

// this is a mock ajax call
const submitViaAjax = (formDataObject) => {
	// DO NOT EDIT BELOW THIS LINE
	var json = JSON.stringify(formDataObject)
	console.log(json)
}