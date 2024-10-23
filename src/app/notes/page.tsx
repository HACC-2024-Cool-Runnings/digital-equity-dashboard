export default function Notes() {
	interface UnorderedListProps {
		children: React.ReactNode;
	}

	function UnorderedList({ children }: UnorderedListProps) {
		return <ul className="list-disc pl-6 space-y-2">{children}</ul>;
	}

	interface LinkProps {
		href: string;
		label: string;
	}

	function Link({ href, label }: LinkProps) {
		return (
			<a
				className="text-blue-500 hover:underline"
				href={href}
				target="_blank"
				rel="noopener noreferrer"
			>
				{label}
			</a>
		);
	}

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>Goals</h1>
				<div>
					<h3>Links</h3>
					<UnorderedList>
						{[
							{
								label: 'Challenge PDF',
								href: 'https://hacc.hawaii.gov/wp-content/uploads/2024/10/Digital-Equity-Challenge_2024.pdf',
							},
							{
								label: 'Data set - Community Anchor Institutions',
								href: 'https://opendata.hawaii.gov/dataset/community-anchor-institutions',
							},
							{
								label: 'Data set - DOE Adult Schools',
								href: 'https://opendata.hawaii.gov/dataset/doe-adult-schools',
							},
							{
								label: 'Data set - Hawaii State Libraries',
								href: 'https://opendata.hawaii.gov/dataset/hawaii-state-libraries',
							},
							{
								label: 'Data set - Digital Equity Asset Inventory',
								href: 'https://opendata.hawaii.gov/dataset/digital-equity-asset-inventory',
							},
							{
								label: 'Data set - Digital Equity Covered Population - id',
								href: 'https://opendata.hawaii.gov/dataset/digital-equity-covered-populations-id',
							},
						].map((link, index) => (
							<li key={`link-${index}`}>
								<Link href={link.href} label={link.label}></Link>
							</li>
						))}
					</UnorderedList>
				</div>
				<p>Goals:</p>
				<UnorderedList>
					<li>Track progress</li>
					<li>Identify areas of need</li>
					<li>
						Evaluate effectiveness of ongoing digital equity initiatives
						<UnorderedList>
							<li>What are the initiatives?</li>
						</UnorderedList>
					</li>
				</UnorderedList>

				<p>Preconditions:</p>
				<UnorderedList>
					<li>There exist the connectivity summary and projects tracker dashboards</li>
					<li>
						There exist independent DE projects rolling out in parallel but not to a single place
					</li>
					<li>
						Studies exist for reference/analysis:
						<UnorderedList>
							<li>Digital Readiness and Literacy Study</li>
							<li>Digital Economy Study</li>
							<li>Rural Health Disparities</li>
						</UnorderedList>
					</li>
				</UnorderedList>

				<p>Assumptions:</p>
				<UnorderedList>
					<li>This dashboard will frontend to data analytic tools, APIs, reports, and GIS maps</li>
				</UnorderedList>

				<p>Current approach:</p>
				<p>There does not exist a unifying frontend</p>

				<p>Users:</p>
				<UnorderedList>
					<li>
						Officials to make informed decisions about:
						<UnorderedList>
							<li>Where to allocate resources</li>
							<li>How to tailor programs to better meet needs</li>
						</UnorderedList>
					</li>
				</UnorderedList>

				<p>Business rules (what app should have):</p>
				<UnorderedList>
					<li>
						Geographical breakdown
						<UnorderedList>
							<li>Be able to visualize by state, island, county</li>
						</UnorderedList>
					</li>
					<li>
						Digital Literacy Tracking - Integrating data on:
						<UnorderedList>
							<li>Digital literacy programs</li>
							<li>Participation rates</li>
							<li>Outcomes to highlight areas where more education and training are needed</li>
						</UnorderedList>
					</li>
					<li>
						Device Access and Affordability
						<UnorderedList>
							<li>Metrics on digital devices across different communities</li>
						</UnorderedList>
					</li>
					<li>
						Broadband Connectivity
						<UnorderedList>
							<li>Map broadband connectivity levels</li>
							<li>Highlight areas with limited or no access and track improvements over time</li>
						</UnorderedList>
					</li>
					<li>
						Impact of Digital Equity Initiatives
						<UnorderedList>
							<li>Feature that tracks how well initiatives are doing</li>
						</UnorderedList>
					</li>
					<li>
						Community Feedback Loop
						<UnorderedList>
							<li>Mechanism for community to provide feedback</li>
						</UnorderedList>
					</li>
				</UnorderedList>

				<p>Special Requirements:</p>
				<UnorderedList>
					<li>
						Identify any special non-functional requirements, such as legal, privacy, or performance
						issues to be considered during design or implementation
					</li>
				</UnorderedList>
			</main>
		</div>
	);
}
