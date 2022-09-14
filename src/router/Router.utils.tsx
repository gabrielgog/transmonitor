const pathResolver = (modulePath: string) => modulePath;

export const appRoutes = {
    root: () => '/'
}


export const appRoutePaths: {
    root: string;
} = {
    root: appRoutes.root()
}