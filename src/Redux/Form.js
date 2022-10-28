import { createSlice } from "@reduxjs/toolkit";
import formData from '../assets/ListOfInfor';
export const Form = createSlice({
    name: "form",
    initialState: { value: formData },
    reducers: {
        addUserForm: (state, action) => {
            state.value.push(action.payload);
        },
        deleteUserForm: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        updateUserFormName: (state, action) => {
            state.value.forEach((user) => {
                if (user.id === action.payload.id) {
                    user.name = action.payload.name;
                }
            });
        }
    },
});

export default Form.reducer;
export const { addUserForm, deleteUserForm, updateUserFormName } = Form.actions;
export const selectUsersCount = (state) => state.users.value.length;