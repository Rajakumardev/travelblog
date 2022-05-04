export const SiteConfigProvider = ({ children }) => {
    //site config state
    //rn there is not need for setstate but lets keep it there
    const [SiteConfig, setSiteConfig] = useState({});

    return (
        <SiteConfigContext.Provider value={{
            SiteConfig,
            setSiteConfig
        }}>
            {children}
        </SiteConfigContext.Provider>
    )
}