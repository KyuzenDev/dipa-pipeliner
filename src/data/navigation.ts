interface NavigationProps {
    url: string;
    label: string;
    published?: boolean;
}

export const navigation: NavigationProps[] = [
   {
        url: "/blog",
        label: "Pipeliner Blog",
        published: true,
    },
];