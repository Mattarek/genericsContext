interface TableProps<T> {
	data: T[];
	renderRow: (item: T) => React.ReactNode;
}

export const Table = <T,>({ data, renderRow }: TableProps<T>) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Data</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr key={index}>{renderRow(item)}</tr>
				))}
			</tbody>
		</table>
	);
};
