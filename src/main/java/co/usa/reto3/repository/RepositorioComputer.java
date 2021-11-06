package co.usa.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.model.Computer;
import co.usa.reto3.repository.crud.InterfaceComputer;

@Repository // Lo marcamos como un repositorio
public class RepositorioComputer {
    @Autowired // Nos ayuda al llamado de los metodos CrudRepositori (operaciones SQL)
    private InterfaceComputer crud; // Escribimos que clase queremos instanciar

    public List<Computer> getAll() {
        return (List<Computer>) crud.findAll();
    }

    // Al momento de hacer el llamado traera muchos metodos, List me ayuda a
    // almacenarlos; con el metodo getAll() los obtiene todos; en el return devuelve
    // un iterable y para convertir este iterable a un integer o string hago la
    // conversion al momento de hacer el llamado de la funcion (List<Bike>)

    public Optional<Computer> getComputer(int id) {
        return crud.findById(id);
    }

    // Recupera una entidad (registro de la tabla) por id; Optional me da una
    // respuesta (Si esta vacio {hago algo}, si esta lleno {hago algo})

    public Computer save(Computer computer) {
        return crud.save(computer);
    }

    // Le pasamos el objeto a guardar (.save es un metodo de CrudRepository)

    public void delete(Computer computer) {
        crud.delete(computer);
    }

}
