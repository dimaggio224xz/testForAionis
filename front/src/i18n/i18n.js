import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                navTitle: 'Notes',
                emptyMSG: 'No notes!',
                menu: {
                    menu: 'Menu',
                    notes: 'All notes',
                    create: 'Create a note',
                    completed: 'Completed notes'
                },
                buttons: {
                    complete: 'Complete',
                    edit: 'Edit',
                    unComplete: 'Un complete',
                    delete: 'Delete'
                }
            }
        },

        ru: {
            translations: {
                navTitle: 'Заметки',
                emptyMSG: 'Заметок нет!',
                menu: {
                    menu: 'Меню',
                    notes: 'Все заметки',
                    create: 'Создать заметку',
                    completed: 'Выполненные заметки'
                },
                buttons: {
                    complete: 'Завершить',
                    edit: 'Изменить',
                    unComplete: 'Возобновить',
                    delete: 'Удалить'
                }
            }
        },

    },
    lng: "en",
    fallbackLng: "en",
    debug: true,
    
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },
    
    react: {
        wait: true
    }
})


export default i18n;