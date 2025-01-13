// flux.js

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            contacts: null,
        },
        actions: {
            // Obtener contactos
            getContacts: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/Andres-Arreaza/contacts");
                    if (response.status == 404) {
                        getActions().createAgenda();
                    }
                    const data = await response.json();
                    if (response.ok) {
                        setStore({ contacts: data.contacts });
                    } else {
                        setStore({ contacts: false });
                    }
                } catch (error) {
                    console.log("Error: ", error);
                    setStore({ contacts: false });
                }
            },

            // Crear nuevo contacto
            createNewContact: async (contact) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/Andres-Arreaza/contacts", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(contact)
                    });
                    const data = await response.json();
                    getActions().getContacts();
                    return true;
                } catch (error) {
                    console.log("Error: ", error);
                    return false;
                }
            },

            // Actualizar contacto
            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Andres-Arreaza/contacts/${id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(updatedContact)
                    });
                    const data = await response.json();
                    getActions().getContacts();
                    return true;
                } catch (error) {
                    console.log("Error: ", error);
                    return false;
                }
            },

            // Eliminar contacto
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Andres-Arreaza/contacts/${id}`, {
                        method: "DELETE",
                    });
                    const data = await response;
                    getActions().getContacts();
                    return true;
                } catch (error) {
                    console.log("Error: ", error);
                    return false;
                }
            },

            // Crear agenda
            createAgenda: async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/contact/agendas/Andres-Arreaza", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                    });
                    const data = await response.json();
                    console.log(data);
                    return true;
                } catch (error) {
                    console.log("Error: ", error);
                    return false;
                }
            },
        }
    }
};

export default getState;
