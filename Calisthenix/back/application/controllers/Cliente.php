<?php
class Cliente extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model("Personas_model");
        $this->load->model("Productos_model");
    }
    public function index()
    {
        $this->load->view('welcome_message');
    }
    public function getcompras()
    { 
        // echo "hola";
        $idcliente = $this->input->post("idcliente");
         $data = $this->Personas_model->get_compras($idcliente);

        $obj["resultado"] = $data != NULL;
        $obj["mensaje"] = $obj["resultado"] ?
            'Compras aseguradas' : "No compras";
        $obj["compras"] = $data;
    
        echo json_encode($obj);
    }
        // $this->load->view('welcome_message');
    


}       