import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.herokuapp.com/"
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
         const response = await axios.get("/contacts")
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
   
})
export const addContact = createAsyncThunk("contacts/addContact", async(newContact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", newContact)
        return response.data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (Id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${Id}`)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)