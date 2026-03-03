export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0]
}

export function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}
