<html>
<body>
    <h1>Messages Log</h1>

<table>
<tr>
  <th>
    Number
  </th>
  <th>
    Message
  </th>
  <th>
    Time
  </th>
  <th>
    Success
  </th>
  </tr>
@foreach ($messages as $message)
    <tr>
        <td>
            {{ $message->number }}
        </td>
        <td>
            {{ $message->message }}
        </td>
        <td>
            {{ $message->time }}
        </td>
        <td>
            {{ $message->success }}
        </td>
    </tr>
  @endforeach
</table>
</body>
</html>