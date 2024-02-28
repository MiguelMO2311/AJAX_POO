<?php
// Datos de tareas (puedes reemplazar esto con una base de datos)
$tasks = [
    ['id' => 1, 'title' => 'Completar informe', 'completed' => false],
    ['id' => 2, 'title' => 'Enviar correo', 'completed' => true],
    // ... más tareas ...
];

// Función que muestra las tareas
function mostrarTareas($tasks) {
    // foreach ($tasks as $task) {
    //     $status = $task['completed'] ? 'Completada' : 'Pendiente';
    //     echo "<li>{$task['title']} <input type='checkbox' name='{$task['id']}' {$task['completed'] ? 'checked' : ''}> ({$status})</li>";
    // }
}

// Procesa el formulario
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["btnMostrar"])) {
        // Muestra todas las tareas
        mostrarTareas($tasks);
    } elseif (isset($_GET["btnElegir"])) {
        // Muestra solo las tareas completadas
        $completedTasks = array_filter($tasks, function ($task) {
            return $task['completed'];
        });
        mostrarTareas($completedTasks);
    } elseif (isset($_GET["btnCompletar"])) {
        // Completa las tareas seleccionadas
        foreach ($_GET as $key => $value) {
            if ($key != "btnCompletar") {
                $tasks[$key - 1]['completed'] = true;
            }
        }
        mostrarTareas($tasks);
    } elseif (isset($_GET["btnEliminar"])) {
        // Elimina las tareas seleccionadas
        $tasks = array_diff_key($tasks, $_GET);
        mostrarTareas($tasks);
    }
}
?>
