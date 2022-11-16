/**
* @jest-environment jsdom
*/

import * as newsletterModule from '../newsletter'

describe('function submitNewsletter', () => {
	
	it('should return object with email and UTM params', () => {

		// Test values for email and UTM params
		const email = 'adam@example.com'
		const utmParams = {
			utm_source: 'summit',
			utm_medium: 'online',
			utm_campaign: '2022-campaign',
			utm_term: 'Fake UTM term',
			utm_content: 'Fake UTM content'
		}

		// Mock the window location with our UTM params
		newsletterModule.getWindowLocation = jest.fn(() => {			
			const searchString = new URLSearchParams(utmParams).toString()			
			return {search: searchString}
		})
		
		// Mock the form data
		newsletterModule.getFormData = jest.fn(() => {
			const formData = new FormData()
			formData.set('email', email)
			return formData
		})
		
		// Expect the submitNewsletter function to return an object
		// with our email and UTM params
		expect(newsletterModule.submitNewsletter()).toEqual({
			email,
			...utmParams
		})  
	})
})

