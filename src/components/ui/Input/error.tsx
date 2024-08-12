interface ErrorProps {
  error?: boolean
  message?: string
}

export const Error = ({ error, message }: ErrorProps) => {
  return (
    error && message && <span className="text-xs text-red-900">{message}</span>
  )
}
