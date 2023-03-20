import PySimpleGUI as sg

# Define a interface gráfica
layout = [[sg.Text('Cadastro de usuário')],
          [sg.Text('Usuário:'), sg.InputText()],
          [sg.Text('E-mail:'), sg.InputText()],
          [sg.Text('Senha:'), sg.InputText(password_char='*')],
          [sg.Button('Enviar')]]

# Cria a janela
window = sg.Window('Cadastro de usuário', layout)

# Loop principal de eventos
while True:
    event, values = window.read()

    # Verifica se a janela foi fechada ou se o usuário clicou no botão Enviar
    if event == sg.WIN_CLOSED:
        break
    elif event == 'Enviar':
        # Faz o cadastro do usuário aqui
        # ...

        # Exibe uma mensagem de sucesso
        sg.popup('Usuário cadastrado com sucesso')

# Fecha a janela ao final
window.close()
