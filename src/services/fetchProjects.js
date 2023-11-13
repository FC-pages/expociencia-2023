import dataComputerScience from '@/data/computerScience.json'
import dataPhysical from '@/data/physical.json'
import dataPhysicalEngineering from '@/data/physicalEngineering.json'
import dataMath from '@/data/math.json'
import dataChemistry from '@/data/chemistry.json'

export async function getComputerScienceProjects(cycle) {
	if (cycle === '2023-1') {
		try {
			const response = await dataComputerScience
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
			const response = await dataPhysical
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
			const response = await dataPhysicalEngineering
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
			const response = await dataMath
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
			const response = await dataChemistry
			return response
		} catch (error) {
			throw new Error('Error fetching data: ' + error.message)
		}
	} else {
		throw new Error('No implementation for this cycle')
	}
}
