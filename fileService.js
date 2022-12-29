import * as uuid from 'uuid'
import * as path from 'path'
// здесь мы будем записывать на диск картинки отправляемые в реквесте, чтобы не захламлять базу данных 
// uuid нужен чтобы генерировать имя для изображение
//логика работы в запросе приходит изображение, мы его сохраняем на диск, даем ему имя и это имя сохраняем в бд. потом по этому имени будем доставать нужное изображение
class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'
            //путь на диске куда файл будем сохранять с помощью path.resolve и добавляет папку которую мы указываем параметрами
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName //возвращаем только имя
        } catch (e){
            console.log(e)
        }
        

    }
}

export default new FileService()