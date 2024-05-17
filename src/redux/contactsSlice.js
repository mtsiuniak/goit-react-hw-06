import { createSlice } from "@reduxjs/toolkit";

export const contacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

  
const slice = createSlice({
    name: "contact",
    initialState: {
        items: contacts,
    },
       reducers: {
        addContact: {
            reducer(state, action) {
                 state.items.push(action.payload)
            },
            prepare(values) {
                return {
                    payload: {
                        ...values,
                        id: crypto.randomUUID(),
                    }
                }
            }
        },
        
        deleteContact: (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload); 
        }
    }
    }
)


export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
