import { useState, useContext, createContext, useEffect } from 'react'
import { xml2js } from 'xml-js'

const cityContext = createContext()

export const fetchCity = async () => {
  const cityNominative = (await (await fetch('http://ip-api.com/json/?fields=city&lang=ru')).json()).city
  const rawXml = await (await fetch(`https://ws3.morpher.ru/russian/declension?${new URLSearchParams({ s: cityNominative })}`)).text()
  const xml = xml2js(rawXml, { compact: true }).xml
  return {
    Именительный: cityNominative,
    Родительный: xml['Р']._text || cityNominative,
    Дательный: xml['Д']._text || cityNominative,
    Винительный: xml['В']._text || cityNominative,
    Творительный: xml['Т']._text || cityNominative,
    Предложный: xml['П']._text || cityNominative
  }
}

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState({
    Именительный: 'Москва',
    Родительный: 'Москвы',
    Дательный: 'Москве',
    Винительный: 'Москву',
    Творительный: 'Москвой',
    Предложный: 'Москве'
  })
  useEffect(() => {
    (async () => { setCity(await fetchCity()) })()
  }, [])
  return <cityContext.Provider value={city}>{children}</cityContext.Provider>
}

/**
 * @typedef {Object} City
 * @property {string} Именительный
 * @property {string} Родительный
 * @property {string} Дательный
 * @property {string} Винительный
 * @property {string} Творительный
 * @property {string} Предложный
 */

/**
 * @returns {City}
 */
export const useCity = () => {
  return useContext(cityContext)
}
