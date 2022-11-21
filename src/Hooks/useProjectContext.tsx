
import { useContext } from 'react'
import ProjectContext from '../context/ProjectContext'

export const useProjectContext = () => {
    const contextValue = useContext(ProjectContext)
    if (!contextValue) {
        throw new Error("outside project context")
    } return contextValue
}