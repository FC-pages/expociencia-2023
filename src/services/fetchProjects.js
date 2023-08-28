import data from '@/data/projects.json'

export async function getComputerScienceProjects(cycle) {
	if (cycle === '2023-1') {
		try {
			const response = await data.computerScience
			return response
		} catch (error) {
			throw new Error('Error fetching data: ' + error.message)
		}
	} else {
		throw new Error('No implementation for this cycle')
	}
}

export async function getPhysicalProjects(cycle) {
	if (cycle === '2023-1') {
		try {
			const response = await data.physical
			return response
		} catch (error) {
			throw new Error('Error fetching data: ' + error.message)
		}
	} else {
		throw new Error('No implementation for this cycle')
	}
}

export async function getPhysicalEngineeringProjects(cycle) {
	if (cycle === '2023-1') {
		try {
			const response = await data.physicalEngineering
			return response
		} catch (error) {
			throw new Error('Error fetching data: ' + error.message)
		}
	} else {
		throw new Error('No implementation for this cycle')
	}
}


export async function getMathProjects(cycle) {
	if (cycle === '2023-1') {
		try {
			const response = await data.math
			return response
		} catch (error) {
			throw new Error('Error fetching data: ' + error.message)
		}
	} else {
		throw new Error('No implementation for this cycle')
	}
}

export async function getChemistryProjects(cycle) {
	if (cycle === '2023-1') {
		try {
			const response = await data.chemistry
			return response
		} catch (error) {
			throw new Error('Error fetching data: ' + error.message)
		}
	} else {
		throw new Error('No implementation for this cycle')
	}
}
