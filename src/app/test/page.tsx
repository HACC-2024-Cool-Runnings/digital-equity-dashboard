'use client';

import React, { useEffect, useState } from 'react';
import MapComponent from './MapComponent';

const TestDatabase: React.FC = () => {
	const [data, setData] = useState<any[]>([]);
	const [caiType, setCaiType] = useState<string[]>(['all']);
	const [island, setIsland] = useState<string[]>(['all']);
	const [city, setCity] = useState<string[]>(['all']);

	useEffect(() => {
		async function fetchData() {
			try {
				const queryParams = new URLSearchParams({
					cai_type: caiType.includes('all') ? '' : caiType.join(','),
					island: island.includes('all') ? '' : island.join(','),
					city: city.includes('all') ? '' : city.join(','),
				}).toString();

				const response = await fetch(`/api/data?${queryParams}`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data1 = await response.json();
				setData(data1);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}

		fetchData();
	}, [caiType, island, city]);

	const handleSelectChange =
		(setter: React.Dispatch<React.SetStateAction<string[]>>) =>
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
			if (selectedOptions.includes('all')) {
				setter(['all']);
			} else {
				setter(selectedOptions);
			}
		};

	return (
		<div>
			<h1>Data from Database</h1>
			<form>
				<div>
					<label>
						CAI Type:
						<select multiple value={caiType} onChange={handleSelectChange(setCaiType)}>
							<option value="all">All</option>
							<option value="Community Center">Community Center</option>
							<option value="Library">Library</option>
							<option value="School">School</option>
							{/* Add more options as needed */}
						</select>
					</label>
				</div>
				<div>
					<label>
						Island:
						<select multiple value={island} onChange={handleSelectChange(setIsland)}>
							<option value="all">All</option>
							<option value="Oahu">Oahu</option>
							<option value="Maui">Maui</option>
							<option value="Hawaii">Hawaii</option>
							<option value="Kauai">Kauai</option>
							{/* Add more options as needed */}
						</select>
					</label>
				</div>
				<div>
					<label>
						City:
						<select multiple value={city} onChange={handleSelectChange(setCity)}>
							<option value="all">All</option>
							<option value="Hauula">Hauula</option>
							<option value="Honolulu">Honolulu</option>
							<option value="Kailua">Kailua</option>
							<option value="Waipahu">Waipahu</option>
							{/* Add more options as needed */}
						</select>
					</label>
				</div>
			</form>
			<MapComponent data={data} />
		</div>
	);
};

export default TestDatabase;
