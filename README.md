# Как запустить проект?

## Установи `yarn`

В качестве пакетного менеджера мы используем Yarn.
Как его установить можно узнать [здесь](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

## Установи все необходимые пакеты

Открой удобный тебе Shell (например Bash или Powershell) и выполни в нем следующую команду

```shell
$ yarn
```

## Настрой окружение

Тебе нужно опеределить переменную окружения `REACT_APP_API_BASE=http://currates.ru/api/`

В Linux это можно сделать через [`.env` файл](https://www.baeldung.com/linux/environment-variables-file#ourenv-file)

В Windows в Powershell это можно сделать [руками](https://www.tutorialspoint.com/how-to-set-environment-variables-using-powershell)

## Запусти сервер

```shell
$ yarn start
```

# Как законтрибьютить?

- Форкнул репу
- Найди или оформи Issue с проблемой
- Добавь себя в список уполномоченных (`Assignees`) или @Chamber6821
- Сделай отдельную ветку под фичу
- Внеси изменения
- Отправь PR в `master`
- PR прошел все чеки? Первое ревью от второго разработчика
- Прошел первое ревью? Второе ревью от ответсвенного за проект
- Прекрасно, можно мерджить твою фичу

