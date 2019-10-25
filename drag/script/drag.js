$( "#container1, #container2" ).sortable({ //об'єднання двох контейнерів для одного методу sortable(сортування)
      connectWith: ".for-box" //елементи контейнерів, що сортуються
    }).disableSelection(); //метод для переміщення
