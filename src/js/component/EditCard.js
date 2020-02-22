import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditCard = props => {
	const { actions, store } = useContext(Context);
	useEffect(() => {
		actions.editContact(props);
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit a contact</h1>
				<form id={store.contact.id} onSubmit={e => actions.submitEditData(e)}>
					<div className="form-group">
						<label>Full name</label>
						<input
							type="text"
							className="form-control"
							placeholder={store.contact.full_name}
							name="full_name"
							value={store.contact.full_name}
							onChange={e => actions.createContac(e)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder={store.contact.email}
							value={store.contact.email}
							name="email"
							onChange={e => actions.createContac(e)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder={store.contact.phone}
							value={store.contact.phone}
							name="phone"
							onChange={e => actions.createContac(e)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							value={store.contact.address}
							placeholder={store.contact.address}
							name="address"
							onChange={e => actions.createContac(e)}
						/>
					</div>
					<button type="Submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
