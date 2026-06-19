#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_synaptic_status])
        .run(tauri::generate_context!())
        .expect("error while running neurotree-x desktop");
}

#[tauri::command]
fn get_synaptic_status() -> String {
    "Synaptic Engine: NOMINAL // P2P Discovery: ACTIVE".into()
}
