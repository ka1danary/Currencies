
// Копирование объекта в буфер обмена
export const copyCurrence = async (currenceObject) => {
    const convertToJson = JSON.stringify(currenceObject);
    try {
        await navigator.clipboard.writeText(convertToJson);
        console.log(convertToJson);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Возвращает дату в удобном формате
export const parseDate = (date) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();

    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');

    return {
        dateObject,
        day,
        month,
        year,
        hours,
        minutes
    }
}

// Сортировки
export const sortCurrenciesByDateUp = (currenciesArray) => {
    return currenciesArray.sort((a, b) => a.value > b.value ? 1 : -1)
}

export const sortCurrenciesByDateDown = (currenciesArray) => {
    return currenciesArray.sort((a, b) => a.value < b.value ? 1 : -1)
}

// Для отслеживания времени следующего обновления
export const calculateDate = (dateString, minutes) => {
    const date = new Date(dateString);
    date.setMinutes(date.getMinutes() + minutes);
    return date.toISOString();
}

// Удаление ненужного поля из объекта, для функции копирования
export const excludeField = (arr, field) => {
    return arr.value.map(({ [field]: _, ...rest }) => rest);
};
