import React, { useState, createContext } from 'react'
import { login, register } from './authentication.service'

interface iCharactersContext {}
export const CharactersContext = createContext({} as iCharactersContext)
