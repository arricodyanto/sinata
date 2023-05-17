export type TEventCardProps = {
    eventDate: string,
    eventTime: string,
    eventImage: string,
    eventTitle: string,
    eventDesc: string,
    eventLink: string
}

export type TEventCardV2Props = {
    image: string
    visibility: string
    publisher: string,
    avatar: string
    title: string
    description: string
    date: string
    time: string
    location: string
    link?: string
}