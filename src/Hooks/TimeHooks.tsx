

export const useGetTaskTime: GetTaskTime = {
    sum(a, b, c) {
        return (a + ((b / 60) + (c / 3600)))
    }
}

export const useGetRounded: RoundTime = {
    sum(a, b) {
        return Math.round(a * b)
    }
}

export const useRoundedProject: RoundProjectTime = {
    sum(a) {
        return Math.round(a)
    }
}