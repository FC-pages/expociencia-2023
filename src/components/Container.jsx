function Container({ children, className }) {
    return (
        <div className={`max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-2 ${className}`}>
            {children}
        </div>
    );
}

export default Container;