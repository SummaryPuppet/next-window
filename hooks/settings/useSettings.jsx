import {useState} from "react";
import Personalization from "../../components/Settings/Personalization"

export default function useSettings (){
  const[settingsInPage, setSettingsInPage]=useState(<p></p>)

  const settingsOption = [
    {
      name: "personalization",
      click: () => setSettingsInPage(<Personalization />)
    },
    {
      name: "about",
      click: () => setSettingsInPage()
    }
  ]

  return {
    settingsInPage,
    settingsOption
  }
}
