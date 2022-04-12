import React, { useState, useEffect } from 'react';
import FuzzySearch from 'react-fuzzy';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import NoticeItem from './NoticeItem';

function Body(props) {
	const [data, setData] = useState(null);

	const findItem = (val) => {
		const data = props?.data;

		data.includes(val) ? setData(val) : setData(null);
	};

	return (
		<div className='mainBody centered'>
			<Row>
				<Col>
					<div style={{ width: '100%', marginBottom: '10px' }}>
						{props?.data ? (
							<FuzzySearch
								list={props.data}
								keys={['title']}
								width={612}
								onSelect={(newSelectedItem) => {
									findItem(newSelectedItem);
								}}
								resultsTemplate={(props, state, styles, clickHandler) => {
									return state.results.map((val, i) => {
										const style =
											state.selectedIndex === i ? styles.selectedResultStyle : styles.resultsStyle;
										return (
											<div key={i} style={style} onClick={() => clickHandler(i)}>
												{val.title}
												<span style={{ float: 'right', opacity: 0.5 }}>by {val.author}</span>
											</div>
										);
									});
								}}
							/>
						) : null}
					</div>
					<ListGroup>
						{props?.data && data === null ? (
							props?.data?.map((notice) => (
								<NoticeItem key={notice.link} link={notice.link} title={notice.title} />
							))
						) : data != null ? (
							<NoticeItem key={data.link} link={data.link} title={data.title} />
						) : null}
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}

export default Body;
