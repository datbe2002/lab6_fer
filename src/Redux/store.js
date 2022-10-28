import { configureStore } from '@reduxjs/toolkit'
import Form from './Form'

export const store = configureStore({
    reducer: {
        form: Form,
    }
})