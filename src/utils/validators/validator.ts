

export const required = (value:string) =>
    (value ? undefined : 'Required')

export const maxLength = (maxLength:number) => (value:string) =>
    value && value.length > maxLength ? `Must be ${maxLength} characters or less` : undefined