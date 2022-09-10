@php

    
    
@endphp
<table>
    <thead>
        <tr>
            @foreach($headers as $th)
                <th> {{ $th }}</th>
            @endforeach
        </tr>
    </thead>
    <tbody>
        <tr>
            <th> {{ $product['id'] }}</th>
            <th> {{ $product['category_id'] }}</th>
            <th> {{ $product['status'] }}</th>
            <th> {{ $product['Instruction_file'] }}</th>
            <th> {{ $product['rent'] }}</th>
            <th> {{ $product['sale'] }}</th>
            <th> {{ $product['guarantee'] }}</th>
            <th> {{ $product['dimension'] }}</th>
            <th> {{ $product['flag'] }}</th>
             <th style="background-color: red"> </th>
        </tr>

        <!-- <tr>
        @foreach($trs as $th)
                <th> {{ $th }}</th>
            @endforeach
        </tr> -->

           @foreach($product->translations as $translate)
             <tr>
                <td>{{ $translate['language_id'] }}</td>
                <td>{{ $translate['name'] }}</td>
                <td>{{ $translate['short_description'] }}</td>
                <td>{{ $translate['description'] }}</td>
                <td>{{ $translate['advantage'] }}</td>
                <td>{{ $translate['flag_text'] }}</td>
                <td>{{ $translate['slug'] }}</td>
                <td>{{ $translate['meta_title'] }}</td>
                <td>{{ $translate['meta_description'] }}</td>
                <td>{{ $translate['meta_keywords'] }}</td>
           </tr>
        @endforeach
       
            
        


              
           


        


        


    </tbody>
</table>
