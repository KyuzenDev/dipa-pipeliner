interface NavigationProps {
    url: string;
    label: string;
    published?: boolean;
}

export const navigation: NavigationProps[] = [
    {
        url: "/pipeliner-homepage",
        label: "Pipeliner",
        published: true,
    },
];