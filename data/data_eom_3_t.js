window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Выберите правильное расположение потоков на схеме",
        "step_of_popup": "Выберите правильное расположение потоков на схеме",
        "test":[
            {"type": 1},
            {"answers": [
                "<img class='answer_image' src='./content/tests_content/01_01.png' alt='sfsf'>",
                "<img class='answer_image' src='./content/tests_content/01_02.png' alt='sfsf'>",
                "<img class='answer_image' src='./content/tests_content/01_03.png' alt='sfsf'>",
            ]},
            {"correct_answer": [2]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_2":{
        "subtitle": "Какие из предложенных блоков входят в технологическую схему селективной очистки масел фенолом?",
        "step_of_popup": "Какие из предложенных блоков входят в технологическую схему селективной очистки масел фенолом?",
        "test":[
            {"type": 1},
            {"answers": [
                "Блок абсорбции",
                "Блок экстракции",
                "Блок регенерации фенола",
                "Блок регенерации пропана",
                "Блок защелачивания"
            ]},
            {"correct_answer": [0,1,2]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_3":{
        "subtitle": "Какими свойствами обладает N-метилпирролидон, как растворитель?",
        "step_of_popup": "Какими свойствами обладает N-метилпирролидон, как растворитель?",
        "test":[
            {"type": 1},
            {"answers": [
                "Высокая избирательность",
                "Высокий температурный режим экстракции ",
                "Высокий выход целевого продукта",
                "Низкая кратность растворителя"
            ]},
            {"correct_answer": [0,2]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_4":{
        "subtitle": "Установите соответствие между названием вещества и его назначением",
        "step_of_popup": "Установите соответствие между названием вещества и его назначением",
        "test":[
            {"type": 9},
            {"description": "Тут пишем описание задания"},
            {"definitions": [
                "<span class='zoom_paragraph'>Экстракт</span>",
                "<span class='zoom_paragraph'>Рафинат</span>",
                "<span class='zoom_paragraph'>Масляный дистиллят</span>",
                "<span class='zoom_paragraph'>Фенол</span>"
            ]},
            {"answers": [
                "Сырье процесса экстракции",
                "Целевой продукт процесса экстракции",
                "Попутный продукт процесса экстракции",
                "Растворитель процесса экстракции"
            ]},
            {"correct_answer_type_10": [3, 2, 1, 4]},
            {"image": true, "image_path": "./content/tests_content/empty_img.png", "image_sgn": "blablabla"}
        ],
    },
    "index_5":{
        "subtitle": "Укажите элементы экстракционной колонны соответствующие номерам на схеме",
        "step_of_popup": "Укажите элементы экстракционной колонны соответствующие номерам на схеме",
        "test":[
            {"type": 5},
            {"leftColumn": 1},
            {"rightColumn": 3},
            {"image": "./content/tests_content/05.png"},
            {"answers": [
            'Штуцеры',
            'Корпус',
            'Переливное устройство',
            'Тарелка']}
        ],
    },
    "index_6":{
        "subtitle": "Выберите соответствие точки контроля и значения температуры установки селективной очистки масел фенолом",
        "step_of_popup": "Выберите соответствие точки контроля и значения температуры установки селективной очистки масел фенолом",
        "test":[
            {"type": 3},
            {"image": true, "image_path": "./content/tests_content/06.png", "unique_class": true},
            {"answers": [
                "270 &deg;С",
                "190 &deg;С",
                "230 &deg;С",
                "230 &deg;С"
            ]}
        ],
    },
    "index_7":{
        "subtitle": "Определите направление движения фаз в экстракторе",
        "step_of_popup": "Определите направление движения фаз в экстракторе",
        "test":[
            {"type": 5},
            {"leftColumn": 3},
            {"rightColumn": 1},
            {"image": "./content/tests_content/07.png"},
            {"answers": [
            'Выход легкой фракции',
            'Вход легкой фракции',
            'Выход тяжелой фракции',
            'Вход тяжелой фракции']}
        ],
    },
    "index_8":{
        "subtitle": "В каких случаях необходимо увеличить кратность растворителя к сырью",
        "step_of_popup": "В каких случаях необходимо увеличить кратность растворителя к сырью",
        "test":[
            {"type": 1},
            {"answers": [
                "Выше содержание низкоиндексных углеводородов",
                "Жестче требования к рафинату",
                "Широкий фракционный состав сырья",
                "Низкий расход растворителя",
                "Высокая селективность процесса"
            ]},
            {"correct_answer": [0,1,2]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_9":{
        "subtitle": "Выберите для экстрактора К-1 соответствующий температурный режим",
        "step_of_popup": "Выберите для экстрактора К-1 соответствующий температурный режим",
        "test":[
            {"type": 1},
            {"answers": [
                "Температура верха – 70 0С, низа -35 0С",
                "Температура верха – 160 0С, низа -190 0С",
                "Температура верха – 350 0С, низа -280 0С"
            ]},
            {"correct_answer": [0]},
            {"image": true, "image_path": "./content/tests_content/09.png", "unique_class": true}
        ],
    },
    "index_10":{
        "subtitle": "Укажите соответствующие названия оборудованию на схеме ",
        "step_of_popup": "Укажите соответствующие названия оборудованию на схеме ",
        "test":[
            {"type": 3},
            {"image": true, "image_path": "./content/tests_content/10.png", "unique_class": true},
            {"answers": [
                "Колонна",
                "Колонна",
                "Барометрический конденсатор",
                "Емкость",
                "Насос"
            ]}
        ],
    },
    "index_11":{
        "subtitle": "Определите, используя график, как будет влиять повышение температуры процесса в области приближения к критическому значению, на выход целевого продукта",
        "step_of_popup": "Определите, используя график, как будет влиять повышение температуры процесса в области приближения к критическому значению, на выход целевого продукта",
        "test":[
            {"type": 1},
            {"answers": [
                "Выход целевого продукта уменьшится",
                "Выход целевого продукта увеличится",
                "Выход целевого продукта не изменится"
            ]},
            {"correct_answer": [0]},
            {"image": true, "image_path": "./content/tests_content/11.png", "unique_class": true}
        ],
    },
    "index_12":{
        "subtitle": "Определите, используя график, как будет влиять повышение кратности (растворитель: сырье) на качество целевого продукта",
        "step_of_popup": "Определите, используя график, как будет влиять повышение кратности (растворитель: сырье) на качество целевого продукта",
        "test":[
            {"type": 1},
            {"answers": [
                "Качество рафината ухудшится",
                "Качество рафината улучшиться",
                "Качество рафината улучшиться"
            ]},
            {"correct_answer": [0]},
            {"image": true, "image_path": "./content/tests_content/12.png", "unique_class": true}
        ],
    },
    "index_13":{
        "subtitle": "Какими факторами будет определяться интенсивность взаимодействия фаз в экстракционной колонне?",
        "step_of_popup": "Какими факторами будет определяться интенсивность взаимодействия фаз в экстракционной колонне?",
        "test":[
            {"type": 1},
            {"answers": [
                "способ контактирования",
                "конструкция аппарата",
                "гидродинамические свойства"
            ]},
            {"correct_answer": [0,1,2]},
            {"image": false, "image_path": "./content/tests_content/12.png", "unique_class": false}
        ],
    },
    "index_14":{
        "subtitle": "На рисунке представлена схема",
        "step_of_popup": "На рисунке представлена схема",
        "test":[
            {"type": 1},
            {"answers": [
                "Установки селективной очистки масел фенолом",
                "Установки селективной очистки масел фурфуролом",
                "Блока отпарных колонн установки селективной очистки масел N-метилперролидоном"
            ]},
            {"correct_answer": [2]},
            {"image": true, "image_path": "./content/tests_content/14.png", "unique_class": false}
        ],
    },
    "index_15":{
        "subtitle": "На рисунке представлена схема установки",
        "step_of_popup": "На рисунке представлена схема установки",
        "test":[
            {"type": 1},
            {"answers": [
                "Селективной очистки масел фенолом",
                "Селективной очистки масел фурфуролом",
                "Селективной очистки масел N-метилперролидоном"
            ]},
            {"correct_answer": [0]},
            {"image": true, "image_path": "./content/tests_content/15.png", "unique_class": true}
        ],
    },
    "index_16":{
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result":[]
    },
}
window.dataLoaded = true;