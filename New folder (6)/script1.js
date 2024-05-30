// Dữ liệu mẫu
const students = [
    {
        stt: 1,
        msv: 'D23QCQCC01',
        ten: 'Nguyễn Văn A',
        lop: 'D23QCQCC01-B',
        sdt: '0353608355',
        ngaysinh: '2005-03-29',
        noisinh: 'Hà Nội',
        thanhtich: 'Tốt'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const studentTable = document.getElementById('studentTable');
    const addNewBtn = document.getElementById('addNew');
    let isAddingNew = false;

    function renderTable() {
        studentTable.innerHTML = '';
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.stt}</td>
                <td>${student.msv}</td>
                <td>${student.ten}</td>
                <td>${student.lop}</td>
                <td>${student.sdt}</td>
                <td>${student.ngaysinh}</td>
                <td>${student.noisinh}</td>
                <td>${student.thanhtich}</td>
                <td>
                    <button onclick="editStudent(${index})">Sửa</button>
                    <button onclick="deleteStudent(${index})">Xóa</button>
                </td>
            `;
            studentTable.appendChild(row);
        });

        // Thêm hàng để nhập thông tin sinh viên mới nếu đang trong chế độ thêm mới
        if (isAddingNew) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${students.length + 1}</td>
                <td><input type="text" id="newMsv" placeholder="MSV"></td>
                <td><input type="text" id="newTen" placeholder="Tên"></td>
                <td><input type="text" id="newLop" placeholder="Lớp"></td>
                <td><input type="text" id="newSdt" placeholder="SDT"></td>
                <td><input type="date" id="newNgaysinh" placeholder="Ngày sinh"></td>
                <td><input type="text" id="newNoisinh" placeholder="Nơi sinh"></td>
                <td><input type="text" id="newThanhtich" placeholder="Thành tích"></td>
                <td>
                    <button onclick="saveNewStudent()">Lưu</button>
                </td>
            `;
            studentTable.appendChild(newRow);
        }
    }

    window.showAddNewRow = function() {
        isAddingNew = true;
        renderTable();
    }

    window.saveNewStudent = function() {
        const newStudent = {
            stt: students.length + 1,
            msv: document.getElementById('newMsv').value,
            ten: document.getElementById('newTen').value,
            lop: document.getElementById('newLop').value,
            sdt: document.getElementById('newSdt').value,
            ngaysinh: document.getElementById('newNgaysinh').value,
            noisinh: document.getElementById('newNoisinh').value,
            thanhtich: document.getElementById('newThanhtich').value
        };

        if (newStudent.msv && newStudent.ten && newStudent.lop && newStudent.sdt && newStudent.ngaysinh && newStudent.noisinh && newStudent.thanhtich) {
            students.push(newStudent);
            isAddingNew = false; // Sau khi lưu xong, tắt chế độ thêm mới
            renderTable();
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    }

    window.editStudent = function(index) {
        const student = students[index];
        const row = studentTable.rows[index];
        row.innerHTML = `
            <td>${student.stt}</td>
            <td><input type="text" id="editMsv${index}" value="${student.msv}"></td>
            <td><input type="text" id="editTen${index}" value="${student.ten}"></td>
            <td><input type="text" id="editLop${index}" value="${student.lop}"></td>
            <td><input type="text" id="editSdt${index}" value="${student.sdt}"></td>
            <td><input type="date" id="editNgaysinh${index}" value="${student.ngaysinh}"></td>
            <td><input type="text" id="editNoisinh${index}" value="${student.noisinh}"></td>
            <td><input type="text" id="editThanhtich${index}" value="${student.thanhtich}"></td>
            <td>
                <button onclick="saveEditStudent(${index})">Lưu</button>
            </td>
        `;
    }

    window.saveEditStudent = function(index) {
        const student = students[index];
        student.msv = document.getElementById(`editMsv${index}`).value;
        student.ten = document.getElementById(`editTen${index}`).value;
        student.lop = document.getElementById(`editLop${index}`).value;
        student.sdt = document.getElementById(`editSdt${index}`).value;
        student.ngaysinh = document.getElementById(`editNgaysinh${index}`).value;
        student.noisinh = document.getElementById(`editNoisinh${index}`).value;
        student.thanhtich = document.getElementById(`editThanhtich${index}`).value;

        if (student.msv && student.ten && student.lop && student.sdt && student.ngaysinh && student.noisinh && student.thanhtich) {
            renderTable();
        } else {
            alert("Vui lòng điền đầy đủ thông tin.");
        }
    }

    window.deleteStudent = function(index) {
        if (confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
            students.splice(index, 1);
            renderTable();
        }
    }

    renderTable();
});
