# Лабораторная работа №18. Введение в JavaScript. Сравнение с C#

---

## Основная информация

**ФИО:** Гвоздева В.А, Деушев Т.Т
**Группа:** ИСП-231
**Дата:** 07.04.2026

---

## Краткое описание работы

В ходе выполнения лабораторной работы были изучены следующие темы:
- **Основы языка JavaScript**
- **Способы подключения JavaScript к HTML**
- **Объявление переменных**
- **Операторы сравнения**
- **Условные операторы**

---

## Структура проекта

- Lab18_LearnJs_Gvozdeva_Deushev/
    - README.md
    - index.html
    - main.js
    - img/
        - gitPushLab18_Gvozdeva_Deushev.png
        - step6_variablesLab18_Gvozdeva_Deushev.png
        - step7_typeofLab18_Gvozdeva_Deushev.png
        - step8_typeConversionLab18_Gvozdeva_Deushev.png
        - step9_strictLab18_Gvozdeva_Deushev.png
        - step10_consoleLab18_Gvozdeva_Deushev.png
        - step11_nodeLab18_Gvozdeva_Deushev.png
        - step12_conditionsLab18_Gvozdeva_Deushev.png
---

## Итоговая таблица: JavaScript vs C#

|**Аспект**|**C#**|**JavaScript**|
|:----:|:----:|:----:|
|**Типизация**|Статическая|Динамическая|
|**Компиляция**|Да (в IL-код)|Нет (интерпретация/JIT)|
|**Точка входа**|Main()|Отсутствует|
|**Переменные**|int x = 5;|let x = 5;|
|**Константы**|const int X = 5;|const X = 5;|
|**Вывод в консоль**|Console.WriteLine()|console.log()|
|**Проверка типа**|Во время компиляции|typeof|
|**Сравнение**|== (по значению)|=== (строгое)|
|**Условия**|if/else/switch|if/else/switch + тернарный|
|**Циклы**|for/while/do-while/foreach|for/while/do-while/for...of|
|**Функции**|Методы с типами|Функции без типов|
|**Массивы**|int[] arr = new int[5];|let arr = [];|
|**Объекты**|Требуют класс|Можно создать литералом|
|**ООП**|Классическое|Прототипное|
|**Null**|null|null и undefined|
|**Строгость**|Высокая (компилятор)|Низкая (нужна дисциплина)|

## Главные выводы:

1. **JavaScript гибче C# — можно менять типы переменных**
2. **JavaScript проще синтаксически — меньше церемоний** 
3. **JavaScript опаснее — ошибки находятся во время выполнения**
4. **C# безопаснее — компилятор не даст допустить многие ошибки**