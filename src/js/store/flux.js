const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: {
				full_name: "",
				email: "",
				phone: "",
				agenda_slug: "Jarb29",
				address: ""
			},
			contacts: []
		},

		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			createContac: e => {
				e.preventDefault();
				const { contact } = getStore();
				contact[e.target.name] = e.target.value;
				setStore({ contact: contact });
			},

			editContact: e => {
				console.log(e.match.params.id);
				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.match.params.id}`)
					.then(response => response.json())
					.then(data => {
						setStore({ contact: data });
					})
					.catch(error => console.log(error));
			},

			submitData: e => {
				e.preventDefault();
				const store = getStore();

				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(store.contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},

			setContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Jarb29")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
					})
					.catch(error => console.log(error));
			},

			submitEditData: e => {
				e.preventDefault();
				const store = getStore();

				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.target.id}`, {
					method: "PUT",
					body: JSON.stringify(store.contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			},

			onDelete: e => {
				const store = getStore();
				console.log(e.target.id);

				fetch(`https://assets.breatheco.de/apis/fake/contact/${e.target.id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (resp.ok === true) {
							fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Jarb29", {
								method: "GET",
								headers: {
									"Content-Type": "application/json"
								}
							})
								.then(resp => {
									return resp.json();
								})
								.then(data => {
									setStore({ contacts: data });
								})
								.catch(error => {
									console.log(error);
								});
						}
					})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
