# Как запустить сервер для разработки?

```shell
$ yarn
$ yarn start
```

> [!NOTE]
> Должны быть установлена переменаня окружения `REACT_APP_API_BASE=http://currates.ru/api/`
> В Linux можно сделать через файл [`.env`](https://www.baeldung.com/linux/environment-variables-file#ourenv-file) в корне проекта
> В Windows для PowerShell можно либо написать скрипт, либо в ручную для каждой сессии треминала указывать значение переменной [вот так](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.4#use-the-variable-syntax)

# Как законтрибьютить?

- Форкнул репу
- Найди или оформи Issue с проблемой
- Добавь себя в список уполномоченных (`Assignees`) или попроси ответственного
- Сделай отдельную ветку под фичу
- Внеси изменения
- Отправь PR в `master`
- PR прошел все чеки? Первое ревью от второго разработчика
- Прошел первое ревью? Второе ревью от ответсвенного за проект
- Прекрасно, можно мерджить твою фичу

