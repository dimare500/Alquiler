package co.usa.reto3.model.reporte;

import co.usa.reto3.model.Cliente;

public class ContClientes {
    private Long total;
    private Cliente client;

    public ContClientes(Long total, Cliente client) {
        this.total = total;
        this.client = client;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public Cliente getClient() {
        return client;
    }

    public void setClient(Cliente client) {
        this.client = client;
    }

    
}
