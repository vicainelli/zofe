const formatDate = dateString => new Intl.DateTimeFormat('pt-BR').format(new Date(dateString))

export default formatDate
