import { createContext, useContext, useState } from 'react'

export interface IAppCtx {
  contactView: boolean
  setContactView: React.Dispatch<React.SetStateAction<boolean>>
  viewContact: () => void
  unsetView: () => void
}

export const AppCtx = createContext<IAppCtx>({} as IAppCtx)

interface Props  {
  children?: React.ReactNode
}

export const AppCtxProvider: React.FC<Props> = ({ children }: Props) => {
  const [contactView, setContactView] = useState(false)

  const viewContact = (): void => {
    setContactView(true)
  }
  const unsetView = (): void => {
    setContactView(false)
  }

  return (
    <AppCtx.Provider
      value={{
        contactView,
        setContactView,
        viewContact,
        unsetView,
      }}
    >
      {children}
    </AppCtx.Provider>
  )
}

export const useAppCtx = () => useContext(AppCtx)
